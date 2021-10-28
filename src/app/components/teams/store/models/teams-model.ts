export interface GetTeamsState {
  teamsList: Team[],
  getTeamsPending: boolean,
  error: any
}

export interface Team {
  id: string
  name: string,
  owner: Owner
}

export interface Owner {
  id: string,
  name: string,
  email: string
}
