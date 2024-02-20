import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
const extensions = [
  StarterKit,
]

const content = ``;

const Tiptap = () => {

  const editor = useEditor({
    extensions,
    content
  })

  if(!editor) {
    return null;
  }
  return (
    <div>
      <div>
        <button 
          onClick={()=>editor.chain().focus().toggleBold().run()} 
          disabled={!editor.can().chain().focus().toggleBold().run()} 
          className={editor.isActive('bold')?'is-active' : ''}
        ><strong>B</strong></button>
      </div>
      <div>
        <EditorContent editor={editor}/>
      </div>
      <button>Save</button>
    </div>
  )
}

export default Tiptap
