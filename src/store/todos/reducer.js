const initialState = [
    {
        id: 01,
        title: "Buy rice",
        description: "Go to Metro after shift and buy rice",
        created_date: "11/17/2022",
        due_date: "11/17/2022",
        status: "Pending"
    }
]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            return [...state, action.payload]
        case 'UPDATE_TODO': 
    }
}