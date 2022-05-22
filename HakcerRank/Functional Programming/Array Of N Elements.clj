;; (let [lines (line-seq (java.io.BufferedReader. *in*))]
;;   (println ((fn [n]
;;               (= lines (take n (repeatedly #(rand-int 11)))))
;;             (Integer. (first lines)))))

;; (defn a [n] (take n (repeatedly #(rand-int 11))))
;; (println (a 3))

(println ((fn [n] (take n (repeatedly #(rand-int 11)))) 3))