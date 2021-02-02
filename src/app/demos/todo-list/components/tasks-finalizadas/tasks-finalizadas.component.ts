import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { TasksService } from "../../todo.service";
import { Store } from "../../todo.store";

@Component({
    selector: 'tasks-finalizadas',
    templateUrl: './tasks-finalizadas.component.html',
})
export class TasksFinalizadasComponent implements OnInit, OnDestroy{

    finalizados$: Observable<any[]>
    subscription: Subscription;

    constructor(private taskService: TasksService, private store: Store) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
    ngOnInit() {
        this.finalizados$ = this.store.getTodoList()
        .pipe(map(todolist => todolist.filter(task =>  task.finalizado)));  

        this.subscription = this.taskService.getTodoList$.subscribe();
    }

    onToggle(event) {
        this.taskService.toggle(event);
    }
        
}
