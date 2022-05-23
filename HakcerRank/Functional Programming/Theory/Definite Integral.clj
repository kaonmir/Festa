;; (require '[clojure.string])
(require '[clojure.string :refer (split)])

(defn pow [x y] (reduce * 1 (repeat y x)))

(def delta_x 1/1000)
(defn integral [f a b]
  (* (reduce + 0 (map f (range a b delta_x))) delta_x))

(def coefficients (map #(Integer/parseInt %1) (split (read-line) #" ")))
(def exponents (map #(Integer/parseInt %1) (split (read-line) #" ")))
(def ranges (map #(Integer/parseInt %1) (split (read-line) #" ")))

(defn f [x]
  (reduce + 0 (map #(* %1 (pow x %2)) coefficients exponents)))

(println (integral f (first ranges) (last ranges)))
