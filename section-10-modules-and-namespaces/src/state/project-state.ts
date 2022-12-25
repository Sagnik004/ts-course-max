import { ProjectStatus, Project } from '../models/project.js';

// Project state management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listenerFns: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listenerFns.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    this.notifyListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const projectToMove = this.projects.find((proj) => proj.id === projectId);
    if (projectToMove && projectToMove.status !== newStatus) {
      projectToMove.status = newStatus;
      this.notifyListeners();
    }
  }

  private notifyListeners() {
    for (const listenerFn of this.listenerFns) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
