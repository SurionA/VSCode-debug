// Code to debug
console.log('First break');
console.dir('Node version:', process.versions);
console.dir('Env var:', process.env);
throw new Error('I failed');
