const baseUrl = "https://5e6213046f5c7900149bc94d.mockapi.io/events";
export const createEvent = eventData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(eventData)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Internal server error.Can't display event ");
        }
    });
}

export const fetchEvents = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
}

export const removeEvent = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE"
    }).then(response => {
        if (!response.ok) {
            throw new Error("Internal server error. Failed to delete task");
        }
    });
}