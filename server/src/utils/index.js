export const keyEntitiesById = (entityType, entities) => {
  const byIds = {};
  if (entities instanceof Array) {
    entities.forEach((entity) => {
      byIds[entity._id] = entity;
    });
  } else {
    byIds[entities._id] = entities;
  }
  return { [entityType]: byIds };
};
