import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FeedbackViewModel} from '../feedback/feedback.component';
import {Notebook} from '../notes/model/notebook';
import {Observable} from 'rxjs';
import {Note} from '../notes/model/note';
import {User} from '../notes/model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private BASE_URL = 'http://localhost:8080' + '/api';
  public ALL_NOTEBOOKS_URL = `${this.BASE_URL}/notebooks/all`;
  private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
  private SAVE_UPDATE_NOTEBOOK = `${this.BASE_URL}/notebooks`;
  private DELETE_NOTEBOOK_URL = `${this.BASE_URL}/notebooks/`;
  private ALL_NOTES_URL = `${this.BASE_URL}/notes/all`;
  private NOTES_BY_NOTEBOOK_URL = `${this.BASE_URL}/notes/byNotebook/`;
  private SAVE_UPDATE_NOTE_URL = `${this.BASE_URL}/notes`;
  private DELETE_NOTE_URL = `${this.BASE_URL}/notes/`;
  private REGISTER_URL = `${this.BASE_URL}/register/`;
  private LOGIN_URL = `${this.BASE_URL}/register/checkLogin`;
  constructor(private http: HttpClient) {

  }

  getAllNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS_URL);
  }

  postFeedback(feedback: FeedbackViewModel): Observable<any> {
    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }

  postNotebook(notebook: Notebook): Observable<Notebook> {
    return this.http.post<Notebook>(this.SAVE_UPDATE_NOTEBOOK, notebook);
  }

  deleteNotebook(id: string): Observable<any> {
    return this.http.delete(this.DELETE_NOTEBOOK_URL + id);
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.ALL_NOTES_URL);
  }

  getNotesByNotebook(notebookId: string): Observable<Note[]> {
    return this.http.get<Note[]>(this.NOTES_BY_NOTEBOOK_URL + notebookId);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.SAVE_UPDATE_NOTE_URL, note);
  }

  deleteNote(noteId: string): Observable<any> {
    return this.http.delete(this.DELETE_NOTE_URL + noteId);
  }

  registerUser(user: User): Observable<any> {

     return this.http.post<User>(this.REGISTER_URL , user);


  }
  checkUser(user: User): Observable<any> {
    return this.http.post<User>(this.LOGIN_URL , user);

  }


}
