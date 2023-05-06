"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlFragment = void 0;
exports.sqlFragment = {
    user: `
      JSON_OBJECT(
        'id', user.id,
        'name', user.name,
        'avatar', IF(COUNT(avatar.id), 1, null)
      ) as user
    `,
    leftJoinUser: `
        LEFT JOIN user
          ON user.id = post.userId
        LEFT JOIN avatar
          ON user.id = avatar.userId
    `,
    totalComments: `
    (
      SELECT
        COUNT(comment.id)
      FROM
        comment
      WHERE
        comment.postId = post.id
    ) as totalComments
  `,
    leftJoinOneFile: `
      LEFT JOIN LATERAL (
        SELECT *
        FROM file
        WHERE file.postId = post.id
        ORDER BY file.id DESC 
        LIMIT 1
      ) AS FILE ON post.id = file.postId
  `,
    file: `
        CAST(
          IF(
            COUNT(file.id),
            GROUP_CONCAT(
              DISTINCE JSON_OBJECT(
                'id', file.id,
                'width': file.width,
                'height': file.height
              )
            ),
            NULL
          ) AS JSON
        ) AS file
  `,
    leftJoinTag: `
                
  `
};
//# sourceMappingURL=post.provider.js.map