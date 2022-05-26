
(defn print-hello [_] (println "Hello World"))

(defn hello_word_n_times [n] (dorun (map print-hello (range n))))

(def n (Integer/parseInt (read-line)))
(hello_word_n_times n)