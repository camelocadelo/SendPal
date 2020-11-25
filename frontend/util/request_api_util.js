export const fetchAllRequests = (id) => {
    return $.ajax({
        url: `/api/requests`,
        method: `GET`,
        data: { id }
    })
}

export const fetchRequest = (requestId) => {
    return $.ajax({
        url: `/api/requests/${requestId}`,
        method: `GET`
    })
}

export const createRequest = (request) => {
    return $.ajax({
        url: `/api/requests`,
        method: `POST`,
        data: { request }
    })
}

export const updateRequest = (request) => {
    return $.ajax({
        url: `api/requests/${request.id}`,
        method: `patch`,
        data: { request }
    })
}

// export const deleteRequest = (requestId) => {
//     return $.ajax({
//         url: `/api/requests/${requestId}`,
//         method: `DELETE`,
//     })
// }

