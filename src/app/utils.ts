/**
 * Type proprement un composant pour y ajouter des sous-composants
 * @param component Le composant qui va recevoir les sous-composants
 * @param properties Un objet contenant les sous-composants qui vont être ajoutés
 *
 * @example
 *
 *    withProperties(MainComponent, { SubComponent1, SubComponent2 })
 */
export function withProperties<A, B>(component: A, properties: B): A & B {
  Object.keys(properties).forEach((key) => {
    (component as any)[key] = (properties as any)[key];
  });
  return component as A & B;
}
