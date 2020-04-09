try {
  throw 1;
}
catch (e if e instanceof ReferenceError) {

}