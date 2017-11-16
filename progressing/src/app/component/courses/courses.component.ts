import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { UserTokens } from '../../model/userTokens';
import { CoursesService } from '../../service/courses/courses.service';
import { UsertokenService } from '../../service/usertoken/usertoken.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  userTokens: UserTokens;

  constructor(private coursesService: CoursesService, 
    private usertokenService: UsertokenService
  ) 
  {}

  loadUserTokens(): void {
    this.usertokenService.getUserToken() //
      .subscribe(userTokens => this.userTokens = userTokens, // Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.loadUserTokens();
  }

}
