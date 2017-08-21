

import { Component, OnInit } from '@angular/core';
import {Task} from '../Task'
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []
  
  constructor( private dataSerive: TaskService) { 
    this.tasks = dataSerive.getTasks();
  }

  ngOnInit() {

  }



  addNewTask(name: string,number: string ,colour:string){
    this.tasks=[];
    this.tasks.push(new Task(name, number,colour));

   if (name=="toshiba" || colour=="red" )

     this.tasks[0].price = parseInt(number)*2000;

        else if (name=="toshiba" || colour=="black")
          this.tasks[0].price = parseInt(number)*2500; 
             
           else if (name=="dell" || colour=="red")
             this.tasks[0].price = parseInt(number)*3000; 

            else if (name=="dell" || colour=="black")
              this.tasks[0].price = parseInt(number)*3500; 

                else  if (name=="acer" || colour=="red")
                 this.tasks[0].price = parseInt(number)*4000;

                   else  if (name=="acer" || colour=="black")
                    this.tasks[0].price = parseInt(number)*4500;

                      else  if (name=="sony" || colour=="red" )
                       this.tasks[0].price = parseInt(number)*5000;

                          else  if (name=="sony" || colour=="black" )
                           this.tasks[0].price = parseInt(number)*5500;
  
  }


}
