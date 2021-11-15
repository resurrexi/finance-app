import Expense from './entities/Expense'
import Budget from './entities/Budget'
import TrackedMonth from './entities/TrackedMonth'
import User from './entities/User'
import Category from './enums/Category'

const user = new User('Christian', [])

const janExpenses = {
  home: [new Expense('Phone Bill', 45, '1/19/19')],
  snacks: [new Expense('Sprite', 95, '1/25/19')]
}

const febExpenses = {
  home: [new Expense('Sofa', 200, '2/13/19')],
  snacks: [new Expense('Doritos', 150, '2/26/19')]
}

const janBudgets = [
  new Budget(Category.Utilities, 'Home', 200, janExpenses.home),
  new Budget(Category.Food, 'Snacks', 90, janExpenses.snacks)
]

const febBudgets = [
  new Budget(Category.Utilities, 'Home', 100, febExpenses.home),
  new Budget(Category.Food, 'Snacks', 50, febExpenses.snacks)
]

const trackedMonths = [
  new TrackedMonth(1, 2019, janBudgets),
  new TrackedMonth(2, 2019, febBudgets)
]

user.getTrackedMonths().push(...trackedMonths);

user.getTrackedMonths()
  .forEach(trackedMonth => {
    const month = trackedMonth.getMonth();
    const year = trackedMonth.getYear();

    const numOverLimitBudgets = trackedMonth.getBudgets()
      .filter(budget => budget.getIsOverLimit())
      .length;

    if (numOverLimitBudgets > 0)
      console.log(`You went over the limit for ${numOverLimitBudgets} \
                  budget(s) in ${month}/${year}!`)
  })
