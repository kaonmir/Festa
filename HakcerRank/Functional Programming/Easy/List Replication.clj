;; Prepare > Functional Programming > Introduction > List Replication

(defn a [num lst] dorun (flatten (map #(repeat num %) lst)))

(println (a 5 [1 2])) 