import type { ScheduleOptions, ScheduledTask } from "node-cron";
import ncron from "node-cron";
import type { ICronService } from "src/domain/services";

export class NodeCronService
  implements ICronService<ScheduledTask, ScheduleOptions>
{
  public readonly jobs: ScheduledTask[] = [];

  constructor(jobs: ScheduledTask[] = []) {
    this.jobs = jobs;
  }

  createSchedule(
    expression: string,
    func: () => void | Promise<void>,
    options: ScheduleOptions
  ): ScheduledTask {
    return ncron.schedule(expression, func, options);
  }
  start(): void {
    for (const job of this.jobs) {
      job.start();
    }
  }
  addNewJob(job: ScheduledTask): void {
    this.jobs.push(job);
  }
}
