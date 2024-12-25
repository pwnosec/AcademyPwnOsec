import { CourseModule } from '../../types/course';
import { fileUploadLevel1Modules } from './fileUpload/level1';
import { fileUploadLevel2Modules } from './fileUpload/level2';
import { fileUploadLevel3Modules } from './fileUpload/level3';

// Combine all File Upload modules
export const fileUploadModules: CourseModule[] = [
  ...fileUploadLevel1Modules,
  ...fileUploadLevel2Modules,
  ...fileUploadLevel3Modules,
];