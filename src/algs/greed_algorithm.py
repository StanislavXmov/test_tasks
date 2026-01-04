# greed_algorithm

states_need =set(["mt","wa","or","id","nv","ut","ca","az"])
stations = {}
stations["kone"] = set(["id","nv","ut"])
stations["ktwo"] = set(["wa","id","mt"])
stations["kthree"] = set(["or","nv","ca"])
stations["kfour"] = set(["nv","ut"])
stations["kfive"] = set(["ca","az"])

final_stations = set()
while states_need:
  best_station = None
  states_covered = set()
  for station, states in stations.items():
    if station not in final_stations:
      covered = states_need & states
      if len(covered) > len(states_covered):
        best_station = station
        states_covered = covered
  states_need -= states_covered
  final_stations.add(best_station)

print(final_stations)