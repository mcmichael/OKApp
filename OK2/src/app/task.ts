import { Component, input, Input } from "@angular/core";      

@Component({
  selector: "app-task",
  templateUrl: "task/task.html",       
  styleUrls: ["task/task.css"]
})

export class TaskComponent {
  taskId = input(0);
  taskDescription = input(1);
  result =  `Task ID: ${this.taskId}, Description: ${this.taskDescription}`;

  showTask() {
    alert(this.result);
}

}

