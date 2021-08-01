import React, { useCallback, useEffect, useRef, useState } from 'react'
import { DrawPolygonMode, EditingMode, Editor } from 'react-map-gl-draw'
import { getEditHandleStyle, getFeatureStyle } from './style'
import CSS from 'csstype'
import { useDispatch, useSelector } from 'react-redux'
import { getAreasSelector, setAreasAction } from '../../store/areas'
import { Feature } from '@nebula.gl/edit-modes/src/geojson-types'

const buttonWrap: CSS.Properties = {
  position: 'fixed',
  zIndex: 999,
  top: '30px',
  right: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

const MapEditor: React.FC = () => {
  const dispatch = useDispatch()
  const [mode, setMode] = useState<EditingMode | DrawPolygonMode>(
    new EditingMode()
  )
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<
    number | null
  >(null)

  const editorRef = useRef<Editor>(null)

  const areas = useSelector(getAreasSelector)

  useEffect(() => {
    if (editorRef.current && editorRef.current.getFeatures().length === 0) {
      editorRef.current.addFeatures(areas as Feature[])
    }
  }, [editorRef, areas])

  const onSelect = useCallback((options) => {
    setSelectedFeatureIndex(options && options.selectedFeatureIndex)
  }, [])

  const onUpdate = useCallback(
    ({ editType }) => {
      if (editType === 'addFeature') {
        setMode(new EditingMode())
        editorRef.current &&
          dispatch(setAreasAction(editorRef.current.getFeatures()))
      }
    },
    [dispatch]
  )

  const onDelete = useCallback(async () => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
      await (editorRef.current &&
        editorRef.current.deleteFeatures(selectedFeatureIndex))
      editorRef.current &&
        dispatch(setAreasAction(editorRef.current.getFeatures()))
    }
  }, [selectedFeatureIndex, dispatch])

  return (
    <>
      <Editor
        ref={editorRef}
        style={{ width: '100%', height: '100%' }}
        clickRadius={12}
        mode={mode as any}
        onSelect={onSelect}
        onUpdate={onUpdate}
        editHandleShape={'circle'}
        featureStyle={getFeatureStyle}
        editHandleStyle={getEditHandleStyle}
        featuresDraggable={true}
      />
      <div style={buttonWrap}>
        {mode && mode.constructor.name !== 'DrawPolygonMode' && (
          <button onClick={() => setMode(new DrawPolygonMode())}>
            New poly
          </button>
        )}
        {mode &&
          mode.constructor.name !== 'DrawPolygonMode' &&
          selectedFeatureIndex !== null && (
            <button onClick={onDelete}>Delete</button>
          )}
      </div>
    </>
  )
}

export default MapEditor
