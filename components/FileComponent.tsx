import { FileNameTabBar } from "./FileNameTabBar";
import { FileContentComponent } from "./FileContentComponent";
import { File } from "./File";

interface FileViewerProps {
  files: File[];
  selectFileIndex: number;
}

export const FileViewer = ({
  files,
  selectFileIndex,
}: FileViewerProps): JSX.Element => {
  return (
    <div>
      <FileNameTabBar files={files} selectFileIndex={selectFileIndex} />
      <FileContentComponent filecontent={files[selectFileIndex].filecontent} />
    </div>
  );
};
