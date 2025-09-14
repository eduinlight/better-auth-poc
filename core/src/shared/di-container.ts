import { CoreError } from "./core-error";

export type Constructor<T = object> = new (...args: unknown[]) => T;

export class DependencyNotFoundError extends CoreError {
	constructor(dependencyName: string) {
		super(
			`Dependency ${dependencyName} not found in DI container`,
			"DependencyNotFoundError",
		);
	}
}

export class InstanceNotFoundError extends CoreError {
	constructor(tokenName: string) {
		super(
			`Instance for ${tokenName} not found in DI container`,
			"InstanceNotFoundError",
		);
	}
}

export class HandlerNotRegisteredError extends CoreError {
	constructor(handlerName: string) {
		super(
			`Handler ${handlerName} not registered in DI container`,
			"HandlerNotRegisteredError",
		);
	}
}

type HandlerFactory<T = unknown> = (container: DIContainer) => T;

export class DIContainer {
	private registry = new Map<Constructor, unknown>();
	private handlerFactories = new Map<string, HandlerFactory>();

	register<T>(token: Constructor<T>, instance: T): void {
		this.registry.set(token, instance);
	}

	registerHandler<T>(name: string, factory: HandlerFactory<T>): void {
		this.handlerFactories.set(name, factory);
	}

	resolveHandler<T>(handlerName: string): T {
		const factory = this.handlerFactories.get(handlerName);
		if (!factory) {
			throw new HandlerNotRegisteredError(handlerName);
		}
		return factory(this);
	}

	has<T>(token: Constructor<T>): boolean {
		return this.registry.has(token);
	}

	get<T>(token: Constructor<T>): T {
		const instance = this.registry.get(token);
		if (!instance) {
			throw new InstanceNotFoundError(token.name);
		}
		return instance;
	}
}
