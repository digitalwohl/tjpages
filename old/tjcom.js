const READY_EVENT_DOMAIN = 'sandbox';
const READY_EVENT_ACTION = 'jailPage';
const PARENT_TARGET_ORIGIN = 'https://localhost/tabjail/sandbox';

class TJEvent {
    id;

    constructor(domain, action, data) {
        this.domain = domain;
        this.action = action;
        this.data = data;
        this.id = this.generateId();
    }

    generateId() {
        var result = '';
        for (var i = 0; i < 5; i++) {
            result += Math.random().toString(36).substring(2, 5);
        }
        return result;
    }

    static getTJEventFromObject(obj) {
        const event = new TJEvent();
        for (var prop in obj) {
            //TODO for safety you can use the hasOwnProperty function
            event[prop] = obj[prop];
        }
        return event;
    }
}

function sendReadyEvent() {
    const event = new TJEvent(READY_EVENT_DOMAIN, READY_EVENT_ACTION, null);
    window.parent.postMessage(event, PARENT_TARGET_ORIGIN);
}

function emitToSandbox(event) {
    if (event instanceof TJEvent) {
        window.parent.postMessage(event, PARENT_TARGET_ORIGIN)
    }
}

function onSandboxResponse(callback) {
    window.addEventListener('message', event => {
        callback(event);
    })
}
