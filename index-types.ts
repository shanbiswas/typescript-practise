

// "index" types are a type where we can dynamically add key: value pair instead of hard-coding the keys in a type/interface

type ErrorContainer = {
    [prop: string]: string;
}

const ErrorBag: ErrorContainer = {
    email: 'Invalid email'
}