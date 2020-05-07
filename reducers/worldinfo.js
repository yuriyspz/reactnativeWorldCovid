
const initialState = {
    worldStatus: []
};
export default function (state = [], action) {
    switch (action.type) {
        case "GET_WORLD_STATUS":
            return action.data

        default:
            return state;
    }
}

