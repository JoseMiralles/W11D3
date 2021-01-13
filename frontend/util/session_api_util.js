export const signup = (userForm) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: userForm
    });
}

export const login = (userForm) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: userForm
    });
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
}