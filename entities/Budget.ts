import Category from '../enums/Category'
import Expense from './Expense'
import truncate from '../utils/truncate'
import genUniqueId from '../utils/genUniqueId'

class Budget {
  private category: Category;
  private label: string;
  private limit: number;
  private id: string;
  private expenses: Expense[];

  constructor(category: Category, label: string, limit: number, expenses: Expense[]) {
    this.updateLabel(label);
    this.updateCategory(category);
    this.updateLimit(limit);

    this.id = genUniqueId();
    this.expenses = expenses;
  }

  getId(): string {
    return this.id;
  }

  getCategory(): Category {
    return this.category;
  }

  updateCategory(category: Category) {
    this.category = category;
  }

  getLabel(): string {
    return this.label;
  }

  updateLabel(label: string) {
    this.label = truncate(label, 10);
  }

  getLimit(): number {
    return this.limit;
  }

  updateLimit(limit: number) {
    this.limit = limit;
  }

  getExpenses(): Expense[] {
    return this.expenses
  }

  getExpenseTotal(): number {
    return this.getExpenses()
      .reduce((sum, expense) => sum + expense.getAmount(), 0);
  }

  getIsOverLimit(): boolean {
    return this.getExpenseTotal() > this.getLimit();
  }
}

export default Budget;
