export interface TournamentState {
  tournamentList: Tournament[];
  getTournamentsPending: boolean;
  error: any;
}

export interface Tournament {
  id: number,
  name: string
}