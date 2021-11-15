import TrackedMonth from './TrackedMonth'
import genUniqueId from '../utils/genUniqueId'
import Month from '../types/Month'

class User {
  private name: string;
  private id: string;
  private trackedMonths: TrackedMonth[];

  constructor(name: string, trackedMonths: TrackedMonth[]) {
    this.updateName(name);

    this.trackedMonths = trackedMonths;
    this.id = genUniqueId();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  updateName(name: string) {
    this.name = name;
  }

  getTrackedMonths(): TrackedMonth[] {
    return this.trackedMonths;
  }

  getTrackedMonthByDate(month: Month, year: number): TrackedMonth {
    return this.getTrackedMonths()
      .find(trackedMonth => (
        trackedMonth.getMonth() === month && trackedMonth.getYear() === year
      ))
  }
}

export default User;
