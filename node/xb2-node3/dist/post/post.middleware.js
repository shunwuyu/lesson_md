"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = exports.filter = exports.sort = void 0;
const sort = async (request, response, next) => {
    const { sort } = request.query;
    let sqlSort;
    switch (sort) {
        case 'earliest':
            sqlSort = 'post.id ASC';
            break;
        case 'latest':
            sqlSort = 'post.id DESC';
            break;
        case 'most_comments':
            sqlSort = 'totalComments DESC ,post.id DESC';
            break;
        default:
            sqlSort = 'post.id DESC';
            break;
    }
    request.sort = sqlSort;
    next();
};
exports.sort = sort;
const filter = async (request, response, next) => {
    const { tag, user, action } = request.query;
    request.filter = {
        name: 'default',
        sql: 'post.id IS NOT NULL',
    };
    if (tag && !user && !action) {
        request.filter = {
            name: 'tagName',
            sql: 'tag.name = ?',
            param: `${tag}`,
        };
    }
    if (user && action == 'published' && !tag) {
        request.filter = {
            name: 'userPublished',
            sql: 'user.id = ?',
            param: `${user}`,
        };
    }
    if (user && action == 'liked' && !tag) {
        request.filter = {
            name: 'userLiked',
            sql: 'user_like_post.userId = ?',
            param: `${user}`,
        };
    }
    next();
};
exports.filter = filter;
const paginate = (itemsPerPage) => {
    return async (request, response, next) => {
        const { page = 1 } = request.query;
        const limit = itemsPerPage || 30;
        const offset = limit * (parseInt(`${page}`, 10) - 1);
        request.pagination = { limit, offset };
        next();
    };
};
exports.paginate = paginate;
//# sourceMappingURL=post.middleware.js.map