import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import style from './topic.module.css';

const Assignment = () => {

  return (
    <div className={` ${style.container}`}>
      <div className={style.form} >
      <div className="max-w-2xl mx-auto p-4">
      <form action="/submit-post" method="POST">
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">Topic</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-1 py-1 border-b border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">Sub Topic</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-1 py-1 border-b border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className={`mb-6 ${style.editor}`}>
          <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-1">Content</label>
          <CKEditor
        editor={ ClassicEditor }
        data="<p>Enter your content!</p>"
        onReady={ editor => {
          console.log( 'Editor is ready to use!', editor );
          
        } }
        
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
          console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
          console.log( 'Focus.', editor );
        } }
        con="300px"
        className={style.myEditor}
      />
          
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-1">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-bluegreen text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
      </div>
      <div className={style.form1}>
        <div className=''>
          <label className=' font-bold'>For</label>
          <div className='flex gap-1'>
          <div className="relative  my-2 md:w-40 sm:w-40">
        <select
          id="id-04"
          name="id-04"
          required
          className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        >
          <option value="" disabled selected></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label
          htmlFor="id-04"
          className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Select an option
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-04 description-04"
          role="graphics-symbol"
        >
          <title id="title-04">Arrow Icon</title>
          <desc id="description-04">Arrow icon of the select list.</desc>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
          </div>
          <div className="relative my-2 md:w-40 sm:w-40">
        <select
          id="id-04"
          name="id-04"
          required
          className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        >
          <option value="" disabled selected></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label
          htmlFor="id-04"
          className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Select an option
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-04 description-04"
          role="graphics-symbol"
        >
          <title id="title-04">Arrow Icon</title>
          <desc id="description-04">Arrow icon of the select list.</desc>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
          </div>
          </div>
        </div>
        <div className='mt-3'>
          <label className=' font-bold'>Point</label>
          <div className='flex gap-1'>
          <div className="relative  my-2 md:w-40 sm:w-40">
        <select
          id="id-04"
          name="id-04"
          required
          className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        >
          <option value="" disabled selected></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label
          htmlFor="id-04"
          className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Select an option
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-04 description-04"
          role="graphics-symbol"
        >
          <title id="title-04">Arrow Icon</title>
          <desc id="description-04">Arrow icon of the select list.</desc>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
          </div>
          
          </div>
        </div>
        <div className='mt-3'>
          <label className=' font-bold'>Due</label>
          <div className='flex gap-1'>
          <div className="relative  my-2 md:w-80 sm:w-80">
        <select
          id="id-04"
          name="id-04"
          required
          className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        >
          <option value="" disabled selected></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label
          htmlFor="id-04"
          className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Select an option
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-04 description-04"
          role="graphics-symbol"
        >
          <title id="title-04">Arrow Icon</title>
          <desc id="description-04">Arrow icon of the select list.</desc>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
          </div>
          </div>
        </div>
        <div className='mt-3'>
          <label className=' font-bold'>Topic</label>
          <div className='flex gap-1'>
          <div className="relative  my-2 md:w-80 sm:w-80">
        <select
          id="id-04"
          name="id-04"
          required
          className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        >
          <option value="" disabled selected></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label
          htmlFor="id-04"
          className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Select an option
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-labelledby="title-04 description-04"
          role="graphics-symbol"
        >
          <title id="title-04">Arrow Icon</title>
          <desc id="description-04">Arrow icon of the select list.</desc>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
          </div>
          </div>
        </div>
      
      </div>
      </div>
  )
}

export default Assignment