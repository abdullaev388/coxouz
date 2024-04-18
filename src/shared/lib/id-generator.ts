export const idGenerator = () => {
    let id = 0;
    return () => {
        id++;
        return id;
    }
}