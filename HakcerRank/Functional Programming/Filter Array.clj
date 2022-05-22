(defn a [delim lst]
  (filter #(> delim %) lst))

(println (a 3 [10 9 8 2 7 5 1 3 0]))