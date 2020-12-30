import TestOpsJasmineReporter from "@katalon/testops-jasmine";

const reporter = new TestOpsJasmineReporter()


jasmine.getEnv().addReporter(reporter)
