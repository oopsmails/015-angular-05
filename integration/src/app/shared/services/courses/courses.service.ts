import { Injectable } from '@angular/core';
import { Course } from '../../model/course';

@Injectable()
export class CoursesService {
  courses: Course[] = [
    {
      'courseNumber': '111',
      'courseName': 'Angular'
    }
  ];

  constructor() { }

  getCourses() {
    return this.courses;
  }
}

