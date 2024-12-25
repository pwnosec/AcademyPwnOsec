import { CourseModule } from '../../types/course';
import { directoryTraversalLevel1Modules } from './directoryTraversal/level1';
import { directoryTraversalLevel2Modules } from './directoryTraversal/level2';
import { directoryTraversalLevel3Modules } from './directoryTraversal/level3';

// Combine all Directory Traversal modules
export const directoryTraversalModules: CourseModule[] = [
  ...directoryTraversalLevel1Modules,
  ...directoryTraversalLevel2Modules,
  ...directoryTraversalLevel3Modules,
];