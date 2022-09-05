#!/usr/bin/node
if (process.argv.length >= 3) {
  if (process.argv.length > 3) {
    console.log('Arguments found');
  } else {
    console.log('Argument found');
  }
} else {
  console.log('No argument');
}
