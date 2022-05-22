(defn a [lst] (keep-indexed #(if (odd? %1) %2) lst))

(println (a [1 2 3 4 5 6 7]))
(println (a [2 5 3 4 6 7 9 8]))


