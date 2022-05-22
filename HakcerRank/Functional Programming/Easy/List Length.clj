(println ((fn [lst] (reduce (fn [acc, _] (inc acc)) 0 lst))
          [2 5 1 4 3 7 8 6 0 9]))