export interface ICronService<Schedule, Options extends object = object> {
  createSchedule(
    expression: string,
    func: () => void | Promise<void>,
    options: Options
  ): Schedule;

  start(): void;

  addNewJob(job: Schedule): void;
}
