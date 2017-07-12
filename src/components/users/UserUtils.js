const listUsersURL = 'http://dpoi2012api.appspot.com/api/1.0/list_delay?credential=dpoi';

const listUsers = () => new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', listUsersURL);
    req.onload = () =>
        (req.status === 200) ?
            resolve(req.response) :
            reject(Error(req.statusText));
    req.onerror = (err) => reject(err);
    req.send();
});

export default listUsers;
