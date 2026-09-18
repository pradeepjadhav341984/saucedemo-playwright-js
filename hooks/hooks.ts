import { logger } from '../utils/logger';

export function registerHooks(test: any): void {
    test.beforeEach(async (_fixtures: unknown, testInfo: { title: string }) => {
        logger.info(`Starting test: ${testInfo.title}`);
    });

    test.afterEach(async ({ page }: { page: { url(): string } }, testInfo: { title: string; status: string }) => {
        logger.info(`Finished test: ${testInfo.title} (${testInfo.status}) at ${page.url()}`);
    });
}
