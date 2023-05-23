import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {
  
  protected results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  private prepareElements(element: HTMLDivElement): void{
    this.dom.resultsList = <HTMLDivElement>element.querySelector('.stopwatch__results');
    this.dom.addToListBtn = <HTMLButtonElement>element.querySelector('.stopwatch__add-to-list-btn');
    this.dom.resetListBtn = <HTMLButtonElement>element.querySelector('.stopwatch__reset-list-btn');
  }

  private prepareActions(): void {
    /*
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */
    this.dom.addToListBtn.addEventListener('click', () => this.addToList());
    this.dom.resetListBtn.addEventListener('click', () => this.resetList());
  }

  protected renderList(): void {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */
    this.dom.resultsList.innerHTML = '';
    if(this.results){
      for (let i = 0; i < this.results.length; i++) {
        const actualTimer = document.createElement('li');
        actualTimer.textContent = this.results[i];
        this.dom.resultsList.appendChild(actualTimer);
      }
    }
    
  }

  private addToList():void {
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
    this.results.push(this.formatTime(this.currentTime));
    this.renderList();
  }

  resetList() {
    /*
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
    this.results = [];
    this.dom.resultsList.innerHTML = 'No results :(';
  }

}

export default StopwatchWithResults