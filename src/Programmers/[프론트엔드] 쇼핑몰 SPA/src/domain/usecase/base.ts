export interface UseCase {
  invoke(): Promise<unknown>;
}
