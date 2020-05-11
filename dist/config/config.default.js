"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (appInfo) => {
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1585202352797_7394';
    config.middleware = ['errorHandler'];
    // add your config here
    config.bodyParser = {
        enableTypes: ['json', 'form', 'text']
    };
    config.cors = {
        credentials: true,
        origin(ctx) {
            return ctx.request.headers.origin || '*';
        },
        exposeHeaders: 'freelog-resource-type,freelog-meta,freelog-system-meta,freelog-sub-dependencies,freelog-entity-nid',
    };
    config.security = {
        domainWhiteList: ['.testfreelog.com'],
        csrf: {
            enable: false,
            ignoreJSON: true,
            cookieName: 'csrfToken',
        }
    };
    /**
     * 内部中间件没有处理到的异常,在此处统一处理
     */
    config.onerror = {
        all(err, ctx) {
            ctx.body = {
                ret: 0,
                errCode: 1,
                msg: '未处理的异常',
                data: err.stack || err.toString(),
            };
        },
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBQWUsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDckMsTUFBTSxNQUFNLEdBQUcsRUFBbUIsQ0FBQTtJQUVsQyx1RUFBdUU7SUFDdkUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFBO0lBRWxELE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBRSxjQUFjLENBQUUsQ0FBQTtJQUN0Qyx1QkFBdUI7SUFFdkIsTUFBTSxDQUFDLFVBQVUsR0FBRztRQUNsQixXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztLQUN0QyxDQUFBO0lBRUQsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLE1BQU0sQ0FBQyxHQUFZO1lBQ2pCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQTtRQUMxQyxDQUFDO1FBQ0QsYUFBYSxFQUFFLG9HQUFvRztLQUNwSCxDQUFBO0lBRUQsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUNoQixlQUFlLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTtRQUN2QyxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSztZQUNiLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxXQUFXO1NBQ3hCO0tBQ0YsQ0FBQTtJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRztRQUNmLEdBQUcsQ0FBQyxHQUFRLEVBQUUsR0FBWTtZQUN4QixHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUNULEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDO2dCQUNWLEdBQUcsRUFBRSxRQUFRO2dCQUNiLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7YUFDbEMsQ0FBQTtRQUNILENBQUM7S0FDRixDQUFBO0lBRUQsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDLENBQUEifQ==