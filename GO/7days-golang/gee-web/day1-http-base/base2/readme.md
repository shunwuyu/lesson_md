type Handler interface {
    ServeHTTP(w ResponseWriter, r *Request)
}
func ListenAndServe(address string, h Handler) error