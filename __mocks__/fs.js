const fs = jest.genMockFromModule("fs");

fs.readdirSync = jest.fn();
fs.statSync = jest.fn();

export default fs;
